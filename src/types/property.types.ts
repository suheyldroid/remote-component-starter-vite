import {DisplayCondition} from "./types";

interface PropertyBase {
    name?: string
    label?: string
    isRequired?: boolean
    group?: string
    display?: DisplayCondition
}

interface PropertyText extends PropertyBase {
    type: "text"
    value?: string
    maxLength?: number
    minLength?: number
    pattern?: string
}

interface PropertyMultiText extends PropertyBase {
    type: "multi-text"
    value: string
    maxLength?: number
    minLength?: number
    pattern?: string
}

interface PropertyBoolean extends PropertyBase {
    type: "boolean"
    value: boolean
}

interface PropertyNumber extends PropertyBase {
    type: "number"
    value: number
    min?: number
    max?: number
    step?: number
}

interface PropertyDate extends PropertyBase {
    type: "date"
    value: string
    maxDate?: string
    minDate?: string
    includeTime?: boolean
    format?: string
}

interface PropertyRange extends PropertyBase {
    type: "range"
    value: number
    min?: number
    max?: number
    step?: number
}

interface PropertySelect extends PropertyBase {
    type: "select"
    value: string
}

interface PropertyArray extends PropertyBase {
    type: "array"
    value: Property[]
    schema: Property
}

interface PropertyObject extends PropertyBase {
    type: "object"
    value: Property[]

}

type Property =
    PropertyText
    | PropertyMultiText
    | PropertyBoolean
    | PropertyNumber
    | PropertyDate
    | PropertyRange
    | PropertySelect
    | PropertyArray
    | PropertyObject


export type {Property}