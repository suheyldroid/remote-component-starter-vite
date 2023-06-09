import Registry from "appinton-registry";
import "./widgets/Test";

const widgets = Registry.exportWidgets();
const config = Registry.exportWidgetConfig();
export { widgets, config };
