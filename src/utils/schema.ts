import * as yup from "yup";
import { FieldType } from "../types/defaultFieldType";

export const createYupSchema = (fields: FieldType[]) => {
	const schema = fields.reduce(
		(schema, field: FieldType) =>
			field.rules ? { ...schema, [field.name]: field.rules } : schema,
		{}
	);

	return yup.object().shape(schema);
};
