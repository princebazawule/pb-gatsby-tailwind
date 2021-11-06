import * as React from "react"
import cx from "classnames"

function SvgSociety6Icon({ title, titleId, ...props }) {

  const colors = Array.from(props.fill.split('.'))
  // console.log(colors)

  return (
    <svg
      width={48}
      height={48}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      className={cx(`${colors[0] === 'green' ? `fill-green hover:fill-blueGray` : `fill-${colors[0]} hover:fill-gray`}  dark:fill-${colors[1]} scale-100 xl:scale-125 hover:scale-125 xl:hover:scale-150 rotate-0 hover:rotate-6 transition duration-300`)}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M24 0C10.757 0 0 10.757 0 24s10.757 24 24 24 24-10.757 24-24S37.243 0 24 0zm0 2.087c12.114 0 21.913 9.799 21.913 21.913S36.114 45.913 24 45.913 2.087 36.114 2.087 24 11.886 2.087 24 2.087zm13.044 8.348c-2.332 0-11.56 2.066-14.935 9.558-.42-.517-2.112-2.254-6.465-2.254-3.518 0-7.296 1.174-7.296 4.696 0 4.695 7.296 4.956 7.296 7.826 0 3.13-3.387 3.13-3.387 3.13s-.522-4.174-3.91-4.174c-.52 0-2.086.261-2.086 2.087 0 .779.628 1.57 1.15 1.932 1.291.905 3.012 1.199 6.415 1.199 5.833 0 7.455-2.556 7.618-4.794 1.333 3.636 4.733 4.794 7.496 4.794 4.174 0 8.279-3.4 9.644-6.13 1.17-2.349 2.866-9.522-4.17-9.522-3.652 0-6.256 1.695-6.256 1.695 0-.13.538-3.13 3.668-6 1.565-1.434 3.118-1.895 4.044-2.013 1.565-.204 2.066-.485 2.453-.987.714-.92.025-1.043-1.28-1.043zm-20.356 8.348s-.4 4.173 3.126 4.173c.44 0 .986-.17 1.463-.493a15.559 15.559 0 00-.42 3.624c0 .257.02.49.033.734a.476.476 0 00-.033-.082c-1.565-2.609-7.296-2.609-7.296-5.348s3.127-2.608 3.127-2.608zm13.67 3.13c2.463-.024 3.482 2.564 2.81 6-.413 2.136-1.876 5.425-4.15 5.478-1.248.025-2.817-2.168-2.817-5.095 0-3.945 2.413-6.367 4.158-6.383z"
        fill=""
      />
    </svg>
  )
}

export default SvgSociety6Icon
