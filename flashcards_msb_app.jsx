import React, { useState } from 'react';

export default function FlashcardMSB() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex items-center justify-center p-8">
      <div
        className={`relative w-full max-w-xl cursor-pointer [perspective:1000px]`}
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            flipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Frente */}
          <div className="absolute w-full backface-hidden rounded-2xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-gradient-to-br from-zinc-900 to-zinc-950">
            <div className="text-xl text-yellow-400 font-bold uppercase tracking-widest mb-2">
              MATÉRIA
            </div>
            <div className="text-lg text-sky-400 mb-4">Assunto / Tópico</div>
            <div className="border border-yellow-500/40 p-3 rounded-lg text-justify leading-relaxed">
              Afirmação: Este é um exemplo de frente do cartão.
              <div className="bg-white/10 border-l-4 border-yellow-400 mt-4 p-3 rounded-md text-sm">
                💡 Dica: Revise sempre seus flashcards com constância.
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">#tags #MSB</div>
          </div>

          {/* Verso */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl p-6 shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-gradient-to-br from-zinc-950 to-zinc-900">
            <div className="text-lg">
              <span className="text-sky-400 font-semibold">CERTO</span> — resposta correta.
            </div>
            <div className="mt-4 bg-white/10 border-l-4 border-yellow-400 p-3 rounded-md text-sm text-justify">
              Embasamento: O conteúdo foi validado por especialistas em aprendizado ativo.
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>
                Encontrou algum erro?{' '}
                <a
                  href="https://forms.gle/DVPxu5T8iymF4FaB9"
                  className="text-yellow-400 hover:underline"
                >
                  Clique aqui para reportar
                </a>
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              Criado por: <span className="text-yellow-400">Prof. W. Carvalho</span> & Método São Bento
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .rotate-y-180 { transform: rotateY(180deg); }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
      `}</style>
    </div>
  );
}
