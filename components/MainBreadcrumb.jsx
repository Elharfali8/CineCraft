'use client'
import { Slash } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function MainBreadcrumb({page, name, link, linkName}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className='secondary-text text-lg lg:text-xl poppins-medium tracking-wide dark:text-gray-300 dark:hover:text-white hover:underline'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash  />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
                  <BreadcrumbLink href={`${link ? linkName : '#'}`} className='secondary-text text-lg lg:text-xl poppins-medium tracking-wide capitalize dark:text-gray-300 dark:hover:text-white hover:underline'>{page}</BreadcrumbLink>
        </BreadcrumbItem>
              {name && (
                  <>
                    <BreadcrumbSeparator>
                  <Slash  />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                          <BreadcrumbPage className=' text-lg lg:text-xl capitalize '>{name}</BreadcrumbPage>
                </BreadcrumbItem>
                  </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
