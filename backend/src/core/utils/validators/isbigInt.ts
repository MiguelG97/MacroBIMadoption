import { buildMessage, ValidateBy, ValidationOptions } from 'class-validator';

export const IS_BIGINT = 'isBigInt';

export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

export function IsBigInt(options?: ValidationOptions): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_BIGINT,
      validator: {
        validate: (value): boolean => isBigInt(value),
        defaultMessage: buildMessage(
          (eachPrefix) => `${eachPrefix}$property must be a BigInt`,
          options,
        ),
      },
    },
    options,
  );
}
