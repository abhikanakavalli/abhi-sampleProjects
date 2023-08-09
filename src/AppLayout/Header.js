function Header() {
    return(
        <nav class="bg-red-600 h-20">
            <div class="flex space-x-4 justify-around p-5">
            <h1 class="text-white text-lg">Projects</h1>
            <h1 class="text-white text-lg">Description</h1>
            <h1 class="text-white text-lg">About</h1>
            <div>
                <button class='border-white border-2 rounded-sm bg-white mt-2'>
                    sign Out
                </button>
            </div>
            </div>
        </nav>
    )
}

export default Header;