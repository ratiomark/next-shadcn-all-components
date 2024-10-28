import Image from 'next/image'
import { Folder, File, FileCode2Icon, FolderRootIcon, FileCog, InfoIcon } from 'lucide-react'
import { cn } from '@/shared/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '#/tooltip'
const data: TreeNode = {
  type: 'folder',
  name: '_root',

  children: [
    {
      type: 'folder',
      name: 'public',
      children: [
        {
          type: 'folder',
          name: 'fonts',
          children: [
            {
              type: 'asset',
              name: 'GeistMonoVF.woff',
            },
            {
              type: 'asset',
              name: 'GeistVF.woff',
            },
          ],
        },
      ],
    },
    {
      type: 'folder',
      name: 'src',
      additionalContent: '@',
      children: [
        {
          type: 'folder',
          name: 'app',
          children: [],
          additionalContent: '@/app',
        },
        {
          type: 'folder',
          name: 'shared',
          additionalContent: '@/shared',
          children: [
            {
              type: 'folder',
              name: 'components',
              tooltip: '@/shared/components',
              children: [
                {
                  type: 'folder',
                  name: 'ui',
                  additionalContent: '#',
                  children: [
                    {
                      type: 'file',
                      name: 'accordion.tsx',
                      tooltip: '#/accordion',
                    },
                    {
                      type: 'file',
                      name: 'alert-dialog.tsx',
                      tooltip: '#/alert-dialog',
                    },
                    {
                      type: 'other',
                      name: '(...)',
                      tooltip: '#/[shadcn-component-name]',
                    },
                  ],
                },
              ],
            },
            {
              type: 'folder',
              name: 'hooks',
              children: [],
            },
            {
              type: 'folder',
              name: 'lib',
              children: [
                {
                  type: 'file',
                  name: 'utils.ts',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'config',
      name: '...config files',
    },
  ],
}
type TreeNode = FolderNode | FileNode | OtherNode
type NodeType = 'folder' | 'file' | 'other' | 'asset' | 'config'
interface NodeBase {
  type: NodeType
  name: string
  additionalContent?: string
  tooltip?: string
}
interface FolderNode extends NodeBase {
  children: TreeNode[]
}

interface FileNode extends NodeBase {
  type: 'file'
  name: string
}
interface OtherNode extends NodeBase {
  type: 'other' | 'asset' | 'config'
  name: string
}

interface TreeViewProps {
  data: TreeNode
  level?: number
  specialNodes?: string[]
}

const TreeView: React.FC<TreeViewProps> = ({ data, level = 0, specialNodes = [] }) => {
  const isSpecial = specialNodes.includes(data.name)
  let icon: any
  if (data.type === 'folder') {
    icon = data.name === '_root' ? <FolderRootIcon className="text-cyan-900" /> : <Folder className="text-cyan-900" />
  } else if (data.type === 'file') {
    icon = <FileCode2Icon />
  } else if (data.type === 'asset') {
    icon = <File />
  } else if (data.type === 'config') {
    icon = <FileCog />
  } else {
    icon = <FileCode2Icon />
  }
  icon = <span className="mr-2">{icon}</span>

  return (
    <div className={`flex w-full flex-col text-gray-700`}>
      <div
        className={cn('flex items-center px-1 py-0.5', isSpecial && 'text-blue-500')}
        style={{ paddingLeft: `${level * 16}px` }}
      >
        {icon}
        <div className="flex w-full items-center justify-between text-center">
          <p className="text-sm">{data.name}</p>
          {data.additionalContent && (
            <code className="rounded bg-black/[.05] px-1  text-sm font-semibold dark:bg-white/[.06]">
              {data.additionalContent}
            </code>
          )}
          {data.tooltip && (
            <Tooltip>
              <TooltipTrigger asChild>
                <InfoIcon className="h-5 w-5 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <code className="rounded bg-black/[.05]  dark:bg-white/[.06] ">{data.tooltip}</code>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
      {data.type === 'folder' &&
        data.children.map((child, index) => (
          <TreeView key={index} data={child} level={level + 1} specialNodes={specialNodes} />
        ))}
    </div>
  )
}
export default function Home() {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 pb-20 font-[family-name:var(--font-geist-sans)]">
        <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/next.svg"
              alt="Next.js logo"
              width={150}
              height={30}
              priority
            />
            <span className="text-lg font-bold">+</span>
            <p className="mr-4 flex items-center space-x-2 lg:mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                <rect width="256" height="256" fill="none"></rect>
                <line
                  x1="208"
                  y1="128"
                  x2="128"
                  y2="208"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
                <line
                  x1="192"
                  y1="40"
                  x2="40"
                  y2="192"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                ></line>
              </svg>
              <span className="font-bold">shadcn/ui</span>
            </p>
          </div>
          <div className=" mx-auto text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
            <p className="rounded bg-black/[.05] px-2 py-2 dark:bg-white/[.06] ">
              [<code className=" font-semibold">all shadcn components included</code>]
            </p>
          </div>
          <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
            <li className="mb-2 ">
              With <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">src</code>{' '}
              directory
            </li>
            <li className="mb-2">
              Alias <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">@</code> -{' '}
              <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">src</code>
            </li>
            <li className="">
              Alias <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">#</code> -{' '}
              <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
                src/shared/components/ui
              </code>
            </li>
          </ol>
          <div className="w-full">
            <h2 className="pb-1  text-sm text-gray-900">Structure:</h2>
            <TooltipProvider delayDuration={0}>
              <TreeView data={data} />
            </TooltipProvider>
          </div>
        </main>
      </div>
    </>
  )
}
