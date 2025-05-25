import { useCallback, useState } from 'react';

export const useMenu = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement>(null);

    const handleOpenMenu = useCallback((element: HTMLElement) => {
        setAnchorEl(element);
    }, []);

    const handleCloseMenu = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return {
        anchorEl,
        isMenuOpen: Boolean(anchorEl),
        handleOpenMenu,
        handleCloseMenu,
    };
};
