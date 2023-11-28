export default function Home() {
  return (
    <div class="bg-gray-400 flex items-center justify-center h-screen">

    <div class="lg:w-7/12 md:w-9/12 sm:w-10/12 mx-auto p-4">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
            <div class="flex items-center justify-between px-6 py-3 bg-gray-700">
                <button id="prevMonth" class="text-white">Previous</button>
                <h2 id="currentMonth" class="text-white"></h2>
                <button id="nextMonth" class="text-white">Next</button>
            </div>
            <div class="grid grid-cols-7 gap-2 p-4" id="calendar">
            </div>
            <div id="myModal" class="modal hidden fixed inset-0 flex items-center justify-center z-50">
              <div class="modal-overlay absolute inset-0 bg-black opacity-50"></div>
            
              <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div class="modal-content py-4 text-left px-6">
                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold">Selected Date</p>
                    <button id="closeModal" class="modal-close px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring">✕</button>
                  </div>
                  <div id="modalDate" class="text-xl font-semibold"></div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </div>
  )
}
