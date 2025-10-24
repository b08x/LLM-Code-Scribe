
export interface ProviderDetails {
    key: string;
    name: string;
    models: string[];
    defaultTemperature: number;
}

export const providers: ProviderDetails[] = [
    { 
        key: 'gemini', 
        name: 'Google Gemini',
        models: [
            "gemini-2.5-pro",
            "gemini-flash-latest",
        ],
        defaultTemperature: 0.4,
    },
    { 
        key: 'openrouter', 
        name: 'OpenRouter',
        // Models will be fetched from API, but we need a default for display
        models: [ 
            "nousresearch/nous-hermes-2-mixtral-8x7b-dpo",
            "mistralai/mistral-7b-instruct",
            "google/gemini-pro"
        ],
        defaultTemperature: 0.8,
    }
];
