// Extiende la interfaz Window
declare global {
    interface Window {
        FB: any;
        gtag: (event: string, action: string, options?: any) => void;
    }
}

// Accede a las propiedades extendidas
let FB = window.FB;
let gtag = window.gtag;

// Exporta la función con la corrección
export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    if (typeof window !== 'undefined') {
        // Utiliza la función gtag
        gtag("config", GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};
