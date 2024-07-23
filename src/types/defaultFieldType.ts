import * as yup from "yup";
import { FC } from "react";
import { Control, FieldValues, UseFormSetValue } from "react-hook-form";

export interface DefaultFieldType {
	label?: string;
	placeholder?: string;
	name: string;
}

export interface ComponentType extends DefaultFieldType {
	control: Control;
	setValue: UseFormSetValue<FieldValues>;
}

export interface FieldType extends DefaultFieldType {
	rules: yup.Schema;
	Component?: FC<ComponentType>;
}
