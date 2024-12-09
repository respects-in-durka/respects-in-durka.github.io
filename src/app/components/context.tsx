import { BsGithub } from "react-icons/bs"
import { BiDotsHorizontalRounded } from "react-icons/bi"

type ContextMenuProps = {
  top: number
  left: number
}

const ContextMenu = (props: ContextMenuProps) => {
  const top = props.top > screen.height - 340 ? props.top - 170 : props.top
  const left = props.left > screen.width - 243 ? props.left - 243 : props.left

  return (
    <div
      className="absolute rounded-md bg-light-300 w-fit h-fit flex flex-col border border-light-500 z-20 dark:bg-dark-800 dark:text-light-300 dark:border-dark-300"
      style={{ top: top, left: left }}>
      <div className="m-1 justify-center">
        <a href="https://github.com/respects-in-durka" target="_blank" rel="noreferrer"
           className="flex items-center">
          <BsGithub className="w-12 h-12 mr-1" />Check Out My GitHub
        </a>
      </div>
      <div className="m-1 justify-center flex animate-bounce">
        <BiDotsHorizontalRounded className="w-12 h-12 mr-1" />
      </div>
    </div>
  )
}

export default ContextMenu