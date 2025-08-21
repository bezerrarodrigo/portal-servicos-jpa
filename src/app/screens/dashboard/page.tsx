import { SiteHeader } from './components/site-header'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function Dashboard() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SidebarProvider
          style={
            {
              '--sidebar-width': 'calc(var(--spacing) * 72)',
              '--header-height': 'calc(var(--spacing) * 12)',
            } as React.CSSProperties
          }
        >
          <SiteHeader />
        </SidebarProvider>
      </div>
    </div>
  )
}
