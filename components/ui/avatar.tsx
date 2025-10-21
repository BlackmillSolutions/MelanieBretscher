"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

// Simple Initials Avatar
interface InitialsAvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const InitialsAvatar = React.forwardRef<HTMLDivElement, InitialsAvatarProps>(
  ({ name, size = 'md', className }, ref) => {
    const getInitials = (name: string) => {
      return name
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    const getSizeClasses = (size: string) => {
      switch (size) {
        case 'sm': return 'h-8 w-8 text-xs'
        case 'md': return 'h-10 w-10 text-sm'
        case 'lg': return 'h-12 w-12 text-base'
        case 'xl': return 'h-16 w-16 text-lg'
        default: return 'h-10 w-10 text-sm'
      }
    }

    const initials = getInitials(name)
    const sizeClasses = getSizeClasses(size)

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-full bg-[#f8b5c1] text-white font-semibold",
          sizeClasses,
          className
        )}
      >
        <span>{initials}</span>
      </div>
    )
  }
)
InitialsAvatar.displayName = "InitialsAvatar"

export { Avatar, AvatarImage, AvatarFallback, InitialsAvatar }
