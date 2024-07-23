import * as yup from "yup";
import { useEffect } from "react";
import { InputField } from "../../../../components/fields/input-field";
import { ComponentType, FieldType } from "../../../../types/defaultFieldType";

export const fields: FieldType[] = [
	{
		name: "username",
		label: "Username",
		placeholder: "Type username",
		rules: yup.string().required(),
		Component: (props: ComponentType) => {
			const { setValue, name } = props;

			useEffect(() => {
				setValue(name, "username"); // Set default value
			}, [name, setValue]);

			return <InputField {...props} autocomplete />;
		},
	},
];
