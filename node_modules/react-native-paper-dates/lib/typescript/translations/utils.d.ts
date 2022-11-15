export declare type TranslationsType = {
    selectSingle: string;
    selectMultiple: string;
    selectRange: string;
    save: string;
    notAccordingToDateFormat: (inputFormat: string) => string;
    mustBeHigherThan: (date: string) => string;
    mustBeLowerThan: (date: string) => string;
    mustBeBetween: (startDate: string, endDate: string) => string;
    dateIsDisabled: string;
    previous: string;
    next: string;
    typeInDate: string;
    pickDateFromCalendar: string;
    close: string;
};
export declare function getTranslation<K extends keyof TranslationsType>(locale: string | undefined, key: K, fallback?: any): any;
export declare function registerTranslation(locale: string, translations: TranslationsType): void;
