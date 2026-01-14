import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Folder, File, Circle, Dot } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import * as React from 'react';

interface AdminNavItemProps {
    item: NavItem;
    isCollapsed: boolean;
    level?: number;
    isActive?: boolean;
    currentRoute?: string;
    permissions?: string[];
}

export function AdminNavItem({
    item,
    isCollapsed,
    level = 0,
    isActive = false,
    currentRoute = '',
    permissions = []
}: AdminNavItemProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [showCollapsedDropdown, setShowCollapsedDropdown] = React.useState(false);
    const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 });
    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const hasChildren = item.children && item.children.length > 0;

    // Check if item has permission
    // If no permissions are provided, show all items
    // If permissions are provided, check if user has the required permission
    const hasPermission = !item.permission || permissions.length === 0 || permissions.includes(item.permission);
    // Check if item or any child is active
    const checkIsActive = (navItem: NavItem): boolean => {
        if (navItem.href === currentRoute) return true;
        if (navItem.children) {
            return navItem.children.some(child => checkIsActive(child));
        }
        return false;
    };

    const itemIsActive = checkIsActive(item) || isActive;

    // Filter children based on permissions
    const filteredChildren = item.children?.filter(child =>
        !child.permission || permissions.length === 0 || permissions.includes(child.permission)
    ) || [];

    const renderIcon = () => {
        // If custom icon is provided, use it
        if (item.icon) {
            if (typeof item.icon === 'string') {
                return <img src={item.icon} alt={item.title} className="h-5 w-5" />;
            }
            const IconComponent = item.icon;
            return <IconComponent className="h-5 w-5" />;
        }

        // Default icons based on nesting level
        const defaultIcons = [
            Folder,    // Level 0: Parent items
            File,      // Level 1: First level children
            Circle,    // Level 2: Second level children
            Dot        // Level 3+: Deeper nested items
        ];

        const IconComponent = defaultIcons[Math.min(level, defaultIcons.length - 1)];
        return <IconComponent className="h-5 w-5" />;
    };

    const handleCollapsedClick = () => {
        if (isCollapsed && hasChildren) {
            setShowCollapsedDropdown(!showCollapsedDropdown);
            if (triggerRef.current) {
                const rect = triggerRef.current.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const viewportWidth = window.innerWidth;
                const dropdownHeight = 400; // approximate max height

                let topPosition = rect.top + (rect.height / 2) - (dropdownHeight / 2);
                let leftPosition = rect.right + 8;

                // Adjust if dropdown would go off screen vertically
                if (topPosition < 20) {
                    topPosition = 20;
                } else if (topPosition + dropdownHeight > viewportHeight - 20) {
                    topPosition = viewportHeight - dropdownHeight - 20;
                }

                // For variable width dropdowns, we'll position it to the right first
                // and let it expand naturally. If it would go off screen, we'll reposition
                const minDropdownWidth = 200; // minimum expected width
                const maxDropdownWidth = Math.min(400, viewportWidth - rect.right - 28); // max width available

                // If there's not enough space to the right, position to the left
                if (rect.right + minDropdownWidth > viewportWidth - 20) {
                    leftPosition = Math.max(20, rect.left - maxDropdownWidth - 8);
                }

                setDropdownPosition({
                    top: topPosition,
                    left: leftPosition
                });
            }
        }
    };

    const handleExpandedClick = () => {
        if (!isCollapsed && hasChildren) {
            setIsOpen(!isOpen);
        }
    };

    const handleClick = (event: React.MouseEvent) => {
        // Call custom onClick handler if provided
        if (item.onClick) {
            item.onClick(item, event);
        }

        // Handle collapsed dropdown toggle
        if (isCollapsed && hasChildren) {
            handleCollapsedClick();
        } else if (!isCollapsed && hasChildren) {
            handleExpandedClick();
        }
    };

    const handleLinkClick = (event: React.MouseEvent) => {
        // Call custom onClick handler if provided
        if (item.onClick) {
            item.onClick(item, event);
        }
    };

    // Close dropdown when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node)
            ) {
                setShowCollapsedDropdown(false);
            }
        };

        if (showCollapsedDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCollapsedDropdown]);

    if (!hasPermission) return null;

    if (hasChildren && filteredChildren.length > 0) {
        return (
            <div className="relative">
                <Collapsible open={!isCollapsed ? isOpen : false} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger
                        ref={triggerRef}
                        onClick={handleClick}
                        disabled={item.disabled}
                        className={cn(
                            'flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary w-full text-left',
                            isCollapsed && 'justify-center',
                            level > 0 && 'ml-4',
                            itemIsActive && 'bg-primary/10 text-primary',
                            item.disabled && 'opacity-50 cursor-not-allowed',
                            item.className
                        )}
                    >
                        {renderIcon()}
                        {!isCollapsed && (
                            <>
                                <span className="text-sm flex-1 flex justify-between">{item.title}</span>
                                {item.badge && (
                                    <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full">
                                        {item.badge}
                                    </span>
                                )}
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        isOpen ? "rotate-180" : ""
                                    )}
                                />
                            </>
                        )}
                        {/* Active indicator for collapsed state */}
                        {isCollapsed && itemIsActive && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
                        )}
                    </CollapsibleTrigger>

                    {/* Expanded state dropdown */}
                    {!isCollapsed && (
                        <CollapsibleContent className="ml-4 mt-2 space-y-1 border-l-2 border-border/50 pl-4">
                            {filteredChildren.map((child) => (
                                <AdminNavItem
                                    key={child.title}
                                    item={child}
                                    isCollapsed={isCollapsed}
                                    level={level + 1}
                                    currentRoute={currentRoute}
                                    permissions={permissions}
                                />
                            ))}
                        </CollapsibleContent>
                    )}
                </Collapsible>

                {/* Collapsed state floating dropdown */}
                {isCollapsed && showCollapsedDropdown && (
                    <div
                        ref={dropdownRef}
                        className="fixed z-50 w-auto min-w-64 bg-background border border-border rounded-xl shadow-lg p-4 overflow-x-hidden"
                        style={{
                            top: `${dropdownPosition.top}px`,
                            left: `${dropdownPosition.left}px`,
                            backdropFilter: 'blur(12px)',
                            maxWidth: '90vw' // Prevent it from being too wide on small screens
                        }}
                    >
                        {/* Header */}
                        <div className="pb-3 border-b border-border mb-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                                    {renderIcon()}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium truncate">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground">
                                        {filteredChildren.length} items
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Items */}
                        <div className="space-y-1 max-h-96 overflow-y-auto overflow-x-hidden pr-2">
                            {filteredChildren.map((child) => (
                                <div key={child.title}>
                                    <AdminNavItem
                                        item={child}
                                        isCollapsed={false}
                                        level={0}
                                        currentRoute={currentRoute}
                                        permissions={permissions}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.disabled ? '#' : item.href}
            onClick={handleLinkClick}
            className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary w-full',
                isCollapsed && 'justify-center',
                level > 0 && 'ml-4',
                itemIsActive && 'bg-primary/10 text-primary',
                item.disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
                item.className
            )}
            {...(item.external && { target: item.target || '_blank', rel: 'noopener noreferrer' })}
        >
            {renderIcon()}
            {!isCollapsed && (
                <>
                    <span className="text-sm flex-1 min-w-0 break-words">{item.title}</span>
                    {item.badge && (
                        <span className="px-2 py-1 text-xs bg-primary text-primary-foreground rounded-full flex-shrink-0">
                            {item.badge}
                        </span>
                    )}
                </>
            )}
            {/* Active indicator for collapsed state */}
            {isCollapsed && itemIsActive && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/50 rounded-full animate-pulse" />
            )}
            {/* Active indicator for expanded state */}
            {!isCollapsed && itemIsActive && (
                <div className="ml-auto">
                    <div className="w-2 h-2 bg-primary/50 rounded-full animate-pulse" />
                </div>
            )}
        </Link>
    );
}