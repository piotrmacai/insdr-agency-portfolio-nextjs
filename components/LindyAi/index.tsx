'use client';

import React from 'react';

// Definicja propsów, jeśli chciałbyś/chciałabyś, aby adres URL był zmienny
interface LindyEmbedProps {
    embedUrl?: string; // Opcjonalny, jeśli chcesz używać innego linku w przyszłości
}

/**
 * Komponent do osadzania czatbota Lindy AI w pełnej wysokości i szerokości.
 * Wymaga, aby kontener nadrzędny również miał zdefiniowaną wysokość 
 * (np. h-screen na całej stronie lub h-[600px] w sekcji).
 */
const LindyEmbed: React.FC<LindyEmbedProps> = ({
    embedUrl = "https://chat.lindy.ai/embedded/lindyEmbed/179005d8-23b6-434e-a099-6092b379991c"
}) => {
    return (
        // Kontener dla iframe, używający 'h-screen' do zajęcia pełnej wysokości widocznej na ekranie.
        <div className="w-full h-screen overflow-hidden bg-gray-50 dark:bg-slate-900 flex justify-center items-center">
            <iframe
                // Używa propsa lub domyślnego adresu URL
                src={embedUrl}

                // Atrybuty 'width' i 'height' na 100% sprawiają, że iframe wypełnia kontener <div>
                width="100%"
                height="100%"

                // Wymagane przez Lindy: usunięcie ramki.
                style={{ border: 'none' }}

                // Tytuł dla dostępności (accessibility)
                title="Lindy AI Chatbot"

                // Pozostałe atrybuty
                allowFullScreen
            />
        </div>
    );
};

export default LindyEmbed;