export function relay(n: any, t: any, i: any, s: any): {
    levels: Readonly<{
        service_worker: "service_worker";
        content: "content";
        page: "page";
        iframe: "iframe";
        iframe_shim: "iframe_shim";
        test: "test";
    }>;
    curLevel: () => any;
    on: (e: any, n: any, t?: any, i?: boolean, s?: any) => void;
    onOnce: (e: any, n: any, t?: any) => void;
    off: (e: any) => void;
    componentOff: (e: any, n: any) => void;
    offAll: (e: any) => void;
    send: (e: any, n: any, t: any, i?: any) => void;
    levelViaTabId: (e: any, n: any) => string;
    levelViaComponentId: (e: any) => string;
    getLastMsgSenderInfo: () => any;
    getLastMsgType: () => any;
    getLastMsg: () => any;
    mockSend: (e: any, n: any, t?: any) => void;
    localSend: (e: any, n: any, t?: any) => void;
    componentSend: (e: any, n?: {}, t?: any, i?: boolean) => void;
    componentLocalSend: (e: any, n?: {}, t?: any) => void;
    componentOn: (e: any, n: any, t: any, i?: boolean) => void;
    componentRespond: (e: any, n: any) => void;
    clearTMO: () => void;
    registerComponentInitializedCb: (e: any, n?: any) => void;
    setComponentEnvData: (e: any) => void;
    setOverrideLocalComponentInit: (e: any) => void;
    getComponentEnvData: () => {};
};
