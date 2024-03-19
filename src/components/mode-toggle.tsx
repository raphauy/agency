"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Monitor, Moon, Sun } from "lucide-react"

export function DropableToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// put the three buttons in a row, all visible and toggleable
export function LinealToggle() {
    const { theme, setTheme } = useTheme()
    
    return (
        <div className="flex justify-end p-2">
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme("light")}
                className={theme === "light" ? "opacity-100" : "opacity-50"}
            >
                <Sun />
                <span className="sr-only">Light theme</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme("dark")}
                className={theme === "dark" ? "opacity-100" : "opacity-50"}
            >
                <Moon />
                <span className="sr-only">Dark theme</span>
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme("system")}
                className={theme === "system" ? "opacity-100" : "opacity-50"}
            >
                <Monitor />
                <span className="sr-only">System theme</span>
            </Button>
        </div>
    )
}
