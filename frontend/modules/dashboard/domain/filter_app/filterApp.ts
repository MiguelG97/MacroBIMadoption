import { AcademicProgType } from "@/core/shared/enums/filter_enum";
import {
  IAnswer,
  IQuestionnaire,
  IUser,
} from "@/core/shared/types/postgresql_schema_types";

export class FilterApp {
  public static filterAnswers({
    answers,
    questionnaire,
    users,
    academicProgFilter,
  }: {
    answers: IAnswer[];
    questionnaire: IQuestionnaire;
    users: IUser[];
    academicProgFilter: AcademicProgType;
  }) {
    return answers.filter((x) => {
      if (academicProgFilter === AcademicProgType["All Levels"]) {
        return x.questionId === questionnaire.questionId;
      }
      //by academic programme
      else {
        const userFound = users.find((u) => u.userId === x.userId);
        if (
          userFound &&
          userFound.academicProgramme !== null &&
          userFound.academicProgramme
        ) {
          if (academicProgFilter === AcademicProgType.Undergraduate) {
            return (
              x.questionId === questionnaire.questionId &&
              userFound.academicProgramme.every(
                (e) => !e.includes(AcademicProgType.Postgraduate)
              ) &&
              userFound.academicProgramme.some((s) =>
                s.includes(academicProgFilter)
              )
            );
          } else if (academicProgFilter === AcademicProgType.Postgraduate) {
            return (
              x.questionId === questionnaire.questionId &&
              userFound.academicProgramme.every(
                (e) => !e.includes(AcademicProgType.Undergraduate)
              ) &&
              userFound.academicProgramme.some((s) =>
                s.includes(academicProgFilter)
              )
            );
          }
        }
        return false;
      }
    });
  }
}
