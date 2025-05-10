
const HighLightProducts = () => {
  return (
    <div>
      <section>
        <div class="grid py-40 lg:grid-cols-2 lge:grid-cols-2 md:grid-cols-1 mdsm:grid-cols-1 sm:grid-cols-1">
          <div class="bg-[#8fa8ae] py-20 px-10 overflow-hidden relative">
            <img
              src="https://makecomponents.com/Image/overall/product/redmi.webp"
              alt="redmi"
              class="sm:hidden lg:-right-10 lge:-right-52 md:right-20 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px]"
            />
            <div>
              <h2 class="text-5xl font-semibold text-[#002b33]">Xiaomi</h2>
              <h4 class="text-2xl font-thin pt-3 text-[#002b33]">
                Redmi 9<span class="font-thin"> pictures </span>
              </h4>

              <div class="pt-6">
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#002b33]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    194g, 9mm thickness
                  </p>
                </div>

                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#002b33]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 13H5V20H19V13ZM19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11H19ZM6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM9 9C8.44772 9 8 8.55228 8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9ZM15 9C14.4477 9 14 8.55228 14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9Z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    Android 10, MIUI 12
                  </p>
                </div>
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#002b33]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    64GB/128GB storage
                  </p>
                </div>
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#002b33]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    Released 2020, August 31
                  </p>
                </div>
              </div>

              <button class="mt-6 text-2xl text-[#f2f2f2] hover:bg-[#002b3373] bg-[#002b33] py-2 px-16 rounded-full">
                $ 138
              </button>
            </div>
          </div>
          <div class="bg-[#ff9580] py-20 px-10 overflow-hidden relative">
            <img
              src="https://makecomponents.com/Image/overall/product/apple.webp"
              alt="apple"
              class="sm:hidden lg:-right-10 lge:-right-52 md:right-10 mdsm:right-10 top-20 rotate-[340deg] absolute h-[350px]"
            />
            <div>
              <h2 class="text-5xl font-semibold text-[#151515]">
                Apple
                <span class="text-2xl font-normal text-[#151515]">
                  (iphone)
                </span>
              </h2>
              <h4 class="text-2xl font-thin pt-3 text-[#151515]">15 Pro max</h4>

              <div class="pt-6">
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#330800]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-3 3h-4v-1h4v1z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    221g, 8.3mm thickness
                  </p>
                </div>

                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-[22px] text-[#330800]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"></path>
                    <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    iOS 17, up to iOS 17.5.1
                  </p>
                </div>
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#330800]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M18 4v16H6V8.83L10.83 4H18m0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    256GB/512GB/1TB storage
                  </p>
                </div>
                <div class="flex space-x-2 pt-3">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    class="text-[20px] text-[#330800]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M7 11h2v2H7v-2zm14-5v14c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2l.01-14c0-1.1.88-2 1.99-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"></path>
                  </svg>
                  <p class="text-1xl font-normal text-[#00000c]">
                    Released 2023, September 22
                  </p>
                </div>
              </div>

              <button class="mt-6 text-2xl text-[#f2f2f2] hover:bg-[#6d23156b] bg-[#330800] py-2 px-16 rounded-full">
                $ 999
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HighLightProducts;
