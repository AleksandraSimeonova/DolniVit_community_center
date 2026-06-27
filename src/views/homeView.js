import { render, html } from "../lib/lit-html.js";

const template = () => html`

    <!-- Hero Section -->
    <section class="relative bg-green-800 text-white">
        <div class="absolute inset-0 bg-black/40"></div>

        <div class="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <h1 class="text-5xl font-bold mb-6">
                Народно читалище "Христо Ботев 1930"
            </h1>

            <p class="max-w-3xl mx-auto text-xl text-green-100 mb-8">
                Съхраняваме традициите, насърчаваме културата и обединяваме
                общността на село Долни Вит.
            </p>

            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#events"
                   class="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-100">
                    Предстоящи събития
                </a>

                <a href="#news"
                   class="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800">
                    Последни новини
                </a>
            </div>
        </div>
    </section>

    <!-- Activities -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-6">

            <h2 class="text-3xl font-bold text-center mb-12">
                Нашите дейности
            </h2>

            <div class="grid md:grid-cols-3 gap-8">

                <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div class="text-4xl mb-4">📚</div>
                    <h3 class="font-semibold text-xl mb-3">Библиотека</h3>
                    <p class="text-gray-600">
                        Богат фонд от книги и периодични издания за всички възрасти.
                    </p>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div class="text-4xl mb-4">🎭</div>
                    <h3 class="font-semibold text-xl mb-3">Културни събития</h3>
                    <p class="text-gray-600">
                        Концерти, театрални постановки и празнични програми.
                    </p>
                </div>

                <div class="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <div class="text-4xl mb-4">🎶</div>
                    <h3 class="font-semibold text-xl mb-3">Самодейни състави</h3>
                    <p class="text-gray-600">
                        Фолклорни групи, певчески и танцови състави.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- Upcoming Events -->
    <section id="events" class="py-20 bg-gray-100">
        <div class="max-w-7xl mx-auto px-6">

            <h2 class="text-3xl font-bold text-center mb-12">
                Предстоящи събития
            </h2>

            <div class="grid md:grid-cols-3 gap-8">

                <div class="bg-white rounded-xl shadow overflow-hidden">
                    <div class="p-6">
                        <span class="text-green-700 font-semibold">
                            24 май 2026
                        </span>

                        <h3 class="text-xl font-bold mt-2 mb-3">
                            Тържество за Деня на българската просвета
                        </h3>

                        <p class="text-gray-600">
                            Празнична програма с участието на местни състави.
                        </p>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow overflow-hidden">
                    <div class="p-6">
                        <span class="text-green-700 font-semibold">
                            1 юни 2026
                        </span>

                        <h3 class="text-xl font-bold mt-2 mb-3">
                            Детски празник
                        </h3>

                        <p class="text-gray-600">
                            Игри, конкурси и награди за всички деца.
                        </p>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow overflow-hidden">
                    <div class="p-6">
                        <span class="text-green-700 font-semibold">
                            15 юни 2026
                        </span>

                        <h3 class="text-xl font-bold mt-2 mb-3">
                            Фолклорна вечер
                        </h3>

                        <p class="text-gray-600">
                            Представяне на местни народни традиции и песни.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- About -->
    <section class="py-20 bg-white">
        <div class="max-w-5xl mx-auto px-6 text-center">

            <h2 class="text-3xl font-bold mb-6">
                За читалището
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed">
                Народното читалище е традиционен културен и образователен център,
                който подпомага развитието на местната общност чрез културни,
                образователни и обществени инициативи.
            </p>

        </div>
    </section>

`

export default function(ctx){

    ctx.render(template())
}


