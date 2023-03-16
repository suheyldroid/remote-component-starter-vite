import {WidgetConfig} from "../index";

export const registeredComponents: {
    [key: string]: registeredWidget
} = {}

type registeredWidget = {
    render: Function,
    config: WidgetConfig
}

export function Register(render: Function, config: WidgetConfig) {
    registeredComponents[config.id] = {render, config}
    return render
}
