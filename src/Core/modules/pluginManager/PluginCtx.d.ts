import type { PluginAppCtx, PluginInterface, PluginRunCtx } from "../../../Type";
export declare namespace PluginCtx {
    function getPluginAppCtx(plugin: PluginInterface): PluginAppCtx;
    function getPluginRunCtx(): PluginRunCtx;
    const PluginInterfaceDemo: string;
}
