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

type DisplayCondition = {
    source?: string
    operator: "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "nin"
    target?: Target
}

export type {DisplayCondition}