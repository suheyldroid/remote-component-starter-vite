type Target = DynamicType | ConstantType
type DynamicType = {
    type: "dynamic"
    from: {
        from: "variable" | "property"
        path: string
    }
}
type ConstantType = {
    type: "constant"
    value: any
}

type OperatorString = "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "nin"

type DisplayCondition = {
    source?: string
    operator: OperatorString
    target?: Target
}

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

type SelectJsonData = {
    label: string
    value: string
}

type SortType = {
    field: string
    desc: boolean
}
type FilterType = {
    source: string
    operator: OperatorString
    target: Target
}

type Sorter = {
    sorter: SortType
}
type Filter = {
    filter: FilterType[]
}

interface SelectSourceBase {
    sorter?: Sorter
    filter?: Filter
}

interface SelectSourceJson extends SelectSourceBase {
    type: "json"
    data: SelectJsonData[]
    value?: SelectJsonData
}

interface SelectSourceVariable extends SelectSourceBase {
    type: "variable"
    value?: string
}

interface SelectSourceDatabase extends SelectSourceBase {
    type: "database"
    value?: string
}

type SelectSource = {
    source: SelectSourceJson | SelectSourceVariable | SelectSourceDatabase
}

interface PropertySelect extends PropertyBase {
    type: "select"
    source: SelectSource
}

interface PropertyArray extends PropertyBase {
    type: "array"
    value?: Property[]
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


export declare type AppintonConfig = {
    id: string
    name: string
    description: string
    version: string
    buildFile: string
}
type WidgetConfig = {
    id: string
    name: string
    description: string
    version: string
    properties: Property[]

}




