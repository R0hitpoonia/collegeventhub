import React from "react";

const Cards = () => {
  return (
    <div className="max-h-20 max-w-xs drop-shadow-xl">
      <div class="block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-blue-300">
        <a href="#!">
          <img
            class="rounded-t-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
            alt=""
          />
        </a>
        <div class="p-6">
          <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            Card title
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            type="button"
            class="inline-block bg-blue-400 rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
