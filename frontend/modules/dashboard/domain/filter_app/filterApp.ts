import {
  AcademicProgType,
  CountriesEnum,
} from "@/core/shared/enums/filters_enum";
import {
  IAnswer,
  IQuestionnaire,
  IUser,
} from "@/core/shared/types/postgresql_schema_types";

export class FilterApp {
  /**
   * Filtering answers by country and questionnaire
   * @param param0
   * @returns
   */
  public static filterAnswers({
    answers,
    questionnaire,
    users,
    countryFilter,
  }: {
    answers: IAnswer[];
    questionnaire: IQuestionnaire;
    users: IUser[];
    countryFilter: CountriesEnum;
  }) {
    return answers.filter((x) => {
      if (countryFilter === CountriesEnum.All) {
        return x.questionId === questionnaire.questionId;
      }
      //a). by country & by questionnaire
      else {
        const userFound = users.find((u) => u.userId === x.userId);
        if (userFound && userFound.country !== null && userFound.country) {
          return (
            x.questionId === questionnaire.questionId &&
            userFound.country === countryFilter
          );

          // if (countryFilter === CountriesEnum.Undergraduate) {
          //   return (
          //     x.questionId === questionnaire.questionId &&
          //     userFound.academicProgramme.every(
          //       (e) => !e.includes(AcademicProgType.Postgraduate)
          //     ) &&
          //     userFound.academicProgramme.some((s) =>
          //       s.includes(countryFilter)
          //     )
          //   );
          // } else if (countryFilter === AcademicProgType.Postgraduate) {
          //   return (
          //     x.questionId === questionnaire.questionId &&
          //     userFound.academicProgramme.every(
          //       (e) => !e.includes(AcademicProgType.Undergraduate)
          //     ) &&
          //     userFound.academicProgramme.some((s) =>
          //       s.includes(countryFilter)
          //     )
          //   );
          // }
        }
        return false;
      }
    });
  }
}
