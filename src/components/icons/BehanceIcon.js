import * as React from "react"

function SvgBehanceIcon({ title, titleId, ...props }) {
  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className='{fill} hover:fill-gray dark:hover:fill-white scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300'
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M13.94 8.571c.711 0 1.386.029 2.023.085.636.056 1.236.14 1.798.253.6.112 1.143.271 1.63.477.487.206.937.46 1.349.76.412.261.787.58 1.124.955.337.374.618.805.843 1.292.225.45.394.965.506 1.546.113.58.169 1.209.169 1.883 0 .75-.085 1.433-.253 2.052a6.131 6.131 0 01-.759 1.714 6.57 6.57 0 01-1.265 1.349 7.804 7.804 0 01-1.77 1.068c.9.262 1.686.618 2.36 1.068a6.02 6.02 0 011.687 1.686 7.01 7.01 0 011.011 2.136c.225.787.338 1.648.338 2.585 0 .75-.075 1.452-.225 2.108a7.869 7.869 0 01-.618 1.77 7.271 7.271 0 01-1.04 1.49c-.394.43-.834.815-1.321 1.152a7.395 7.395 0 01-1.574.927c-.562.244-1.161.46-1.798.647-.6.15-1.218.271-1.855.365-.637.094-1.293.14-1.967.14H0V8.572h13.94zm-.844 11.916c.562 0 1.087-.075 1.574-.225a4.59 4.59 0 001.293-.618c.374-.262.655-.618.843-1.068.187-.45.28-.993.28-1.63 0-.337-.037-.646-.112-.927a3.999 3.999 0 00-.28-.76 2.25 2.25 0 00-.422-.59 2.253 2.253 0 00-.59-.42 1.933 1.933 0 00-.647-.338 4.946 4.946 0 00-.759-.169 3.897 3.897 0 00-.815-.14 13.062 13.062 0 00-.87-.028H6.52v6.913h6.576zm.337 12.534c.338 0 .656-.01.956-.028.3-.019.6-.066.9-.14.299-.075.57-.16.814-.254.244-.093.478-.215.703-.365.224-.15.421-.328.59-.534.168-.206.328-.421.477-.646.113-.262.207-.553.282-.871a4.54 4.54 0 00.112-1.04c0-.787-.112-1.443-.337-1.967a3.335 3.335 0 00-.956-1.293 3.824 3.824 0 00-1.49-.73 7.518 7.518 0 00-1.882-.226H6.52v8.094h6.913zm20.572-.112c.45.45.983.777 1.602.983.618.206 1.34.31 2.163.31.6 0 1.153-.076 1.659-.225.505-.15.983-.375 1.433-.675a4.25 4.25 0 001.011-.871 3.09 3.09 0 00.563-.984h5.17c-.412 1.274-.936 2.37-1.573 3.288-.637.918-1.387 1.658-2.248 2.22a9.402 9.402 0 01-2.839 1.237c-1.03.262-2.145.394-3.344.394-.862 0-1.668-.066-2.417-.197a11.204 11.204 0 01-2.136-.59 9.455 9.455 0 01-1.883-.984 10.918 10.918 0 01-1.602-1.32 9.675 9.675 0 01-1.208-1.63c-.356-.6-.665-1.237-.927-1.912a12.624 12.624 0 01-.59-2.192 13.686 13.686 0 01-.197-2.36c0-.825.065-1.602.196-2.333.132-.73.328-1.452.59-2.164.263-.674.581-1.311.956-1.911.375-.6.806-1.143 1.293-1.63a9.298 9.298 0 011.602-1.377c.58-.393 1.208-.74 1.883-1.04a9.157 9.157 0 012.107-.646c.731-.131 1.509-.197 2.333-.197.9 0 1.742.084 2.53.253a9.181 9.181 0 012.191.759 11.96 11.96 0 011.855 1.264 9.48 9.48 0 011.518 1.602c.412.6.777 1.237 1.096 1.911.318.675.571 1.387.758 2.136.188.75.319 1.527.394 2.333.075.805.075 1.62 0 2.445h-15.4c0 .824.13 1.61.393 2.36.262.75.618 1.33 1.068 1.743zm6.744-11.185c-.337-.413-.796-.712-1.377-.9a6.297 6.297 0 00-1.939-.28c-.487 0-.927.037-1.32.112-.394.075-.74.187-1.04.337-.3.15-.572.328-.815.534a5.274 5.274 0 00-.647.646 3.773 3.773 0 00-.477.731 4.555 4.555 0 00-.31.787c-.075.262-.14.506-.196.73-.057.225-.085.45-.085.675h9.555c-.075-.75-.234-1.405-.477-1.967-.244-.562-.534-1.03-.872-1.405zm-9.386-11.185h11.972v2.922H31.363V10.54z"
        fill=""
      />
    </svg>
  )
}

export default SvgBehanceIcon
