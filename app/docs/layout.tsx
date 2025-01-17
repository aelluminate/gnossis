import type { ReactNode } from "react"

import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle"

import { baseOptions } from "@/app/layout.config"
import { source } from "@/lib/source"
import { SideBarFooter } from "@/components/shared/sidebar-footer"
import { RootOptions } from "@/components/shared/root-options"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      suppressHydrationWarning
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        prefetch: true,
        collapsible: true,
        tabs: false,
        footer: <SideBarFooter />,
        banner: <RootToggle options={RootOptions} />,
      }}
      links={[]}
    >
      {children}
    </DocsLayout>
  )
}
