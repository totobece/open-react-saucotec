// Extiende la interfaz Window
declare global {
    interface Window {
        FB?: any;
        gtag?: GtagFunction;
    }
}

// Define el tipo para la función gtag
type GtagFunction = (event: string, action: string, options?: Record<string, any>) => void;

// Accede a las propiedades extendidas
let FB: any;
let gtag: GtagFunction | undefined;

if (typeof window !== 'undefined') {
    FB = window.FB;
    gtag = window.gtag;
}

// Exporta la función con la corrección
export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    if (typeof window !== 'undefined' && gtag) {
        // Utiliza la función gtag
        gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};
