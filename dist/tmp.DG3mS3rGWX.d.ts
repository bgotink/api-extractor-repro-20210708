import * as i0 from '@angular/core';

declare namespace i1 {
    export {
        LoremDirective
    }
}

declare namespace i2 {
    export {
        IpsumDirective
    }
}

declare class IpsumDirective {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<IpsumDirective, "[ipsum]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<IpsumDirective, never>;
}

declare class LoremDirective {
    // (undocumented)
    static ɵdir: i0.ɵɵDirectiveDeclaration<LoremDirective, "[lorem]", never, {}, {}, never>;
    // (undocumented)
    static ɵfac: i0.ɵɵFactoryDeclaration<LoremDirective, never>;
}

export declare class LoremIpsumModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<LoremIpsumModule, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<LoremIpsumModule>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<LoremIpsumModule, [typeof i1.LoremDirective, typeof i2.IpsumValidator]>;
}

export { }
