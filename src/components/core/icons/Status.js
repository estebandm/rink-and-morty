import React from 'react'

export const Alive = (props) => {
  return (
    <svg viewBox="0 0 512 512" width='25px' xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M178.087 144.696c-18.412 0-33.391 14.979-33.391 33.391s14.979 33.391 33.391 33.391 33.391-14.979 33.391-33.391-14.979-33.391-33.391-33.391zM333.913 144.696c-18.412 0-33.391 14.979-33.391 33.391s14.979 33.391 33.391 33.391 33.391-14.979 33.391-33.391-14.979-33.391-33.391-33.391z" />
      <path d="M256 0C114.842 0 0 114.842 0 256s114.842 256 256 256 256-114.842 256-256S397.158 0 256 0zm0 478.609c-122.746 0-222.609-99.862-222.609-222.609S133.254 33.391 256 33.391 478.609 133.254 478.609 256 378.746 478.609 256 478.609z" />
      <path d="M395.13 239.304c-9.22 0-16.696 7.475-16.696 16.696 0 67.511-54.924 122.435-122.435 122.435-67.51 0-122.435-54.924-122.435-122.435 0-9.22-7.475-16.696-16.696-16.696S100.174 246.78 100.174 256c0 85.923 69.904 155.826 155.826 155.826S411.826 341.922 411.826 256c0-9.22-7.475-16.696-16.696-16.696z" />
    </svg>
  )
}

export const Dead = (props) => {
  return (
    <svg
      data-name="Layer 3"
      viewBox="0 0 100 100"
      width='50px'
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title />
      <path d="M73.585 38.916v-.001a5.744 5.744 0 00-2.825-9.675 5.664 5.664 0 00-1.546-2.825 5.749 5.749 0 00-9.05 6.929l-.119.119a12.76 12.76 0 00-3.808-1.755 23.036 23.036 0 00-12.465-.002 12.8 12.8 0 00-3.817 1.756l-.12-.118a5.749 5.749 0 00-9.049-6.929 5.667 5.667 0 00-1.546 2.825 5.748 5.748 0 00-2.825 9.675 5.757 5.757 0 006.929.92l1.189 1.19a20.634 20.634 0 00-.458 9.593 6.5 6.5 0 00-.252 9.068l-.48.479a5.75 5.75 0 00-6.928 9.05 5.672 5.672 0 002.825 1.545 5.664 5.664 0 001.546 2.824 5.736 5.736 0 009.788-4.427h18.852a5.741 5.741 0 009.788 4.428 5.667 5.667 0 001.546-2.825 5.672 5.672 0 002.825-1.545 5.749 5.749 0 00-6.929-9.05l-.479-.48a6.5 6.5 0 00-.252-9.067 20.655 20.655 0 00-.458-9.593l1.19-1.19a5.757 5.757 0 006.928-.92zm-40.1-2.561a1.5 1.5 0 00-1.061.439 2.749 2.749 0 11-1.86-4.682 1.54 1.54 0 001.11-.438 1.5 1.5 0 00.438-1.109 2.716 2.716 0 01.795-2.028 2.748 2.748 0 013.887 3.887 1.5 1.5 0 000 2.121l.862.863c-.012.012-.021.027-.033.04a12.896 12.896 0 00-.91 1.09c-.048.064-.098.128-.145.194a12.848 12.848 0 00-.75 1.172c-.02.034-.045.065-.064.099l-1.209-1.21a1.5 1.5 0 00-1.06-.439zm5.41 27l-2.101 2.1a1.5 1.5 0 000 2.121 2.748 2.748 0 11-3.887 3.887 2.714 2.714 0 01-.795-2.028 1.5 1.5 0 00-1.499-1.548h-.048a2.723 2.723 0 01-2.029-.794 2.749 2.749 0 113.888-3.887 1.5 1.5 0 002.121 0l1.798-1.797a6.489 6.489 0 00.627.2c.048.012.098.019.147.03a6.483 6.483 0 00.682.125l.26.029a6.485 6.485 0 00.836.026zm21.226-4.753a1.5 1.5 0 00-2.016 1.409v6.146h-1.967v-2.071a1.5 1.5 0 00-3 0v2.07H51.5v-2.07a1.5 1.5 0 00-3 0v2.07h-1.638v-2.07a1.5 1.5 0 00-3 0v2.07h-1.967v-6.145a1.5 1.5 0 00-2.016-1.409 3.602 3.602 0 01-2.125.089c-.075-.02-.153-.023-.226-.047l-.015-.007a3.41 3.41 0 01-.701-.323 3.527 3.527 0 01-.216-5.902 1.498 1.498 0 00.593-1.568 17.735 17.735 0 01.356-9.452 1.17 1.17 0 01.05-.153c.023-.05.044-.1.061-.153a10.283 10.283 0 016.915-6.489 20.001 20.001 0 0110.867.003 10.28 10.28 0 016.906 6.486c.016.05.039.106.06.153a1.43 1.43 0 01.057.17 17.72 17.72 0 01.35 9.435 1.498 1.498 0 00.593 1.568 3.527 3.527 0 01-.218 5.904 3.58 3.58 0 01-3.065.286zm7.455 4.604a2.749 2.749 0 111.86 4.682 1.499 1.499 0 00-1.548 1.547 2.716 2.716 0 01-.795 2.028 2.748 2.748 0 11-3.887-3.887 1.5 1.5 0 000-2.121l-2.1-2.1v-1.536a6.502 6.502 0 00.834-.027 6.42 6.42 0 00.26-.029 6.516 6.516 0 00.685-.124c.048-.012.096-.018.144-.03a6.474 6.474 0 00.628-.2l1.798 1.797a1.5 1.5 0 002.121 0zm-2.12-26.412l-1.21 1.209c-.018-.032-.041-.061-.06-.093a12.85 12.85 0 00-.761-1.189c-.041-.057-.084-.112-.126-.168a12.857 12.857 0 00-.93-1.114l-.025-.031.862-.863a1.5 1.5 0 000-2.121 2.748 2.748 0 113.887-3.887 2.714 2.714 0 01.795 2.029 1.5 1.5 0 00.438 1.108 1.454 1.454 0 001.11.438 2.743 2.743 0 012.028 4.682 2.752 2.752 0 01-3.888 0 1.544 1.544 0 00-2.12 0z" />
      <path d="M46.932 48.432a1.5 1.5 0 00-2.121 0l-1.436 1.435-1.435-1.435a1.5 1.5 0 00-2.12 2.12l1.434 1.436-1.435 1.434a1.5 1.5 0 102.121 2.121l1.435-1.434 1.436 1.434a1.5 1.5 0 102.12-2.12l-1.434-1.435 1.435-1.435a1.5 1.5 0 000-2.121zM60.18 48.432a1.5 1.5 0 00-2.12 0l-1.435 1.435-1.436-1.435a1.5 1.5 0 00-2.12 2.12l1.434 1.436-1.435 1.434a1.5 1.5 0 102.121 2.121l1.436-1.434 1.435 1.434a1.5 1.5 0 102.12-2.12l-1.434-1.435 1.435-1.435a1.5 1.5 0 000-2.121z" />
    </svg>
  )
}

export const UnknownStatus = (props) => {
  return (
    <svg
      height="25px"
      viewBox="0 0 512 512"
      width="25px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M277.332 384c0 11.781-9.55 21.332-21.332 21.332s-21.332-9.55-21.332-21.332 9.55-21.332 21.332-21.332 21.332 9.55 21.332 21.332zm0 0" />
      <path d="M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-480C132.48 32 32 132.48 32 256s100.48 224 224 224 224-100.48 224-224S379.52 32 256 32zm0 0" />
      <path d="M256 314.668c-8.832 0-16-7.168-16-16v-21.547c0-20.308 12.887-38.508 32.043-45.27 25.492-8.98 42.625-36.14 42.625-55.851 0-32.363-26.305-58.668-58.668-58.668S197.332 143.637 197.332 176c0 8.832-7.168 16-16 16s-16-7.168-16-16c0-49.984 40.664-90.668 90.668-90.668s90.668 40.684 90.668 90.668c0 35.586-28.098 73.367-63.98 86.04-6.399 2.237-10.688 8.315-10.688 15.1v21.528c0 8.832-7.168 16-16 16zm0 0" />
    </svg>
  )
}
