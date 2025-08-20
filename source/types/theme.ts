import {
    IStyleSheet,
    IWidgetNode,
    ObjectRounded
} from "@protorians/widgets";
import type {IUiTarget} from "@protorians/core";
import {LayerVariant} from "../enums.js";
import type {IColoringLayer} from "./coloring.js";
import {IAnimetricGroup, IAnimetricSlimOptions} from "@protorians/animetric";


export interface IThemeSettings {
    blurred: string;
    borderWidth: string;
    borderWidthMin: string;
    borderWidthMax: string;
    borderStyle: string;
    borderColor: string;
    radiusMin: string;
    radius: string;
    radiusMax: string;
    radiusHigh: string;
    shadow: string;
    colorScheme: string;
    fontFamily: string;
    fontSize: string;
    fontLine: string;
    fontSpacing: string;
    fontAlign: string;
    spacing: string;
    gap: string;
    gapMin: string;
    gapMax: string;
    transitionDuration: string;
    transitionTiming: string;
    transitionDelay: string;
    animationDuration: string;
    animationTiming: string;
    animationDelay: string;
}

export type IThemeComposite<T> = (declaration: T) => IWidgetNode<any, any> | undefined;
export type IThemeCompositeExtends<T, A> = (declaration: T) => A | IWidgetNode<any, any> | undefined;

export interface IThemeCompositeScheme {
    Accordion: IThemeComposite<any>;
    Alert: IThemeComposite<any>;
    AlertDialog: IThemeComposite<any>;
    AspectRatio: IThemeComposite<any>;
    Avatar: IThemeComposite<any>;
    Avatars: IThemeComposite<any>;
    Badge: IThemeComposite<any>;
    Breadcrumb: IThemeComposite<any>;
    Button: IThemeComposite<any>;
    Calendar: IThemeComposite<any>;
    Card: IThemeComposite<any>;
    Carousel: IThemeComposite<any>;
    Chart: IThemeComposite<any>;
    Checkbox: IThemeComposite<any>;
    Collapsible: IThemeComposite<any>;
    Combobox: IThemeComposite<any>;
    Command: IThemeComposite<any>;
    ContextMenu: IThemeComposite<any>;
    DataTable: IThemeComposite<any>;
    DatePicker: IThemeComposite<any>;
    Dialog: IThemeComposite<any>;
    Drawer: IThemeComposite<any>;
    DropdownMenu: IThemeComposite<any>;
    Frame: IThemeComposite<any>;
    Helmet: IThemeComposite<any>;
    HoverCard: IThemeComposite<any>;
    Indicator: IThemeComposite<any>;
    Input: IThemeComposite<any>;
    InputOTP: IThemeComposite<any>;
    Layer: IThemeComposite<any>;
    List: IThemeComposite<any>;
    Menubar: IThemeComposite<any>;
    Modal: IThemeComposite<any>;
    Navbar: IThemeComposite<any>;
    BellowMenubar: IThemeComposite<any>;
    Pagination: IThemeComposite<any>;
    Popover: IThemeComposite<any>;
    Progress: IThemeComposite<any>;
    RadioGroup: IThemeComposite<any>;
    Resizable: IThemeComposite<any>;
    ScrollArea: IThemeComposite<any>;
    Select: IThemeComposite<any>;
    Separator: IThemeComposite<any>;
    Sheet: IThemeComposite<any>;
    Sidebar: IThemeComposite<any>;
    Skeleton: IThemeComposite<any>;
    Slider: IThemeComposite<any>;
    Sonner: IThemeComposite<any>;
    Switch: IThemeComposite<any>;
    Table: IThemeComposite<any>;
    Tabs: IThemeComposite<any>;
    Textarea: IThemeComposite<any>;
    Toast: IThemeComposite<any>;
    Toggle: IThemeComposite<any>;
    ToggleGroup: IThemeComposite<any>;
    Tooltip: IThemeComposite<any>;
    View: IThemeComposite<any>;
}

export type IThemeCompositeStyles = {
    accordion: IStyleSheet
    alert: IStyleSheet
    alertDialog: IStyleSheet
    aspectRatio: IStyleSheet
    avatar: IStyleSheet
    avatars: IStyleSheet
    badge: IStyleSheet
    breadcrumb: IStyleSheet
    button: IStyleSheet
    calendar: IStyleSheet
    card: IStyleSheet
    carousel: IStyleSheet
    chart: IStyleSheet
    checkbox: IStyleSheet
    collapsible: IStyleSheet
    combobox: IStyleSheet
    command: IStyleSheet
    contextMenu: IStyleSheet
    dataTable: IStyleSheet
    datePicker: IStyleSheet
    dialog: IStyleSheet
    drawer: IStyleSheet
    dropdownMenu: IStyleSheet
    frame: IStyleSheet
    helmet: IStyleSheet
    hoverCard: IStyleSheet
    indicator: IStyleSheet
    input: IStyleSheet
    inputOTP: IStyleSheet
    label: IStyleSheet
    layer: IStyleSheet
    list: IStyleSheet
    menubar: IStyleSheet
    modal: IStyleSheet
    navbar: IStyleSheet
    navigationMenu: IStyleSheet
    pagination: IStyleSheet
    popover: IStyleSheet
    progress: IStyleSheet
    radioGroup: IStyleSheet
    resizable: IStyleSheet
    scrollArea: IStyleSheet
    select: IStyleSheet
    separator: IStyleSheet
    sheet: IStyleSheet
    sidebar: IStyleSheet
    skeleton: IStyleSheet
    slider: IStyleSheet
    sonner: IStyleSheet
    switch: IStyleSheet
    table: IStyleSheet
    tabs: IStyleSheet
    textarea: IStyleSheet
    toast: IStyleSheet
    toggle: IStyleSheet
    toggleGroup: IStyleSheet
    tooltip: IStyleSheet
    view: IStyleSheet
}

export type IThemeStylesheetBase = {
    root: IStyleSheet;
    texture: IStyleSheet;
}

export type IThemeStylesheet = IThemeStylesheetBase & Partial<IThemeCompositeStyles>

export interface ITheme extends IThemeCompositeScheme {
    get name(): string;

    get selector(): string;

    get settings(): Partial<IThemeSettings>;

    get repository(): HTMLStyleElement | undefined;

    get stylesheet(): IThemeStylesheet;

    getSetting<K extends keyof IThemeSettings>(name: K): IThemeSettings[K] | undefined

    setSetting<K extends keyof IThemeSettings>(key: K, value: IThemeSettings[K] | undefined): this;

    setSettings(settings: IThemeSettings): this;

    syncSettings(): this;

    attach(target?: IUiTarget<HTMLElement>): this;

    detach(target?: IUiTarget<HTMLElement>): this

    outlineColoringResolves(color: LayerVariant): IColoringLayer;

    coloringResolves(color: LayerVariant): IColoringLayer;

    roundedResolves(rounded: ObjectRounded): string;

    animate(widget: IWidgetNode<any, any>, options: IAnimetricSlimOptions): IAnimetricGroup;
}