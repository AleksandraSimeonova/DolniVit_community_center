import { render, html } from "../lib/lit-html.js";

const rootElement = document.getElementById('root');


const layoutTemplate = (body, ctx) => html`


    <!-- Navigation -->
    <nav class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-6" >
            <div class="flex justify-between items-center h-16">
                <div class="font-bold text-xl text-green-800">
                    НЧ "Христо Ботев 1930"
                </div>
                <div
                    class="flex-1 mx-9 hidden lg:block h-16 "
                    style="
                         background-image:url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GOjvL5A0l8uz983XJu9oAcS8bRkIC50q5mSP5FQ3UQ&s=10');
                         background-repeat:repeat-x;
                         background-position:center;
                         background-size:auto 64px;
                    ">
                </div>


                <div class="hidden md:flex space-x-6">
                    <a href="#" class="text-green-900 hover:text-green-700">Начало</a>
                    <a href="#" class="text-green-900 hover:text-green-700">За нас</a>
                    <a href="#" class="text-green-900 hover:text-green-700">Новини</a>
                    <a href="#" class="text-green-900 hover:text-green-700">Събития</a>
                    <a href="#" class="text-green-900 hover:text-green-700">Документи</a>
                    <a href="#" class="text-green-900 hover:text-green-700">Контакти</a>
                </div>
            </div>
        </div>
    </nav>


<div>
    ${body}
</div>

    <!-- Footer -->
    <footer class="bg-green-900 text-white py-10">
        <div class="max-w-7xl mx-auto px-6 text-center">
            <h3 class="font-bold text-xl mb-2">
                НЧ "Христо Ботев 1930" - Долни Вит
            </h3>

            <p class="text-green-100">
                Телефон: +359 XXX XXX XXX | Email: info@example.bg
            </p>
        </div>
    </footer>


`


export default function (ctx, next) {

    
    ctx.render = (templateResult) => {
        render(layoutTemplate(templateResult, ctx), rootElement);
    };

    next();
}
