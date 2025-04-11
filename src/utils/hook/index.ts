import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAuth = () => {
    return !!sessionStorage.getItem('token');
};

export const useResizeObserver = () => {
    const ref = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const observeTarget = ref.current;
        if (!observeTarget) return;

        const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                setDimensions({ width, height });
            }
        });

        resizeObserver.observe(observeTarget);

        return () => resizeObserver.unobserve(observeTarget);
    }, []);

    return [ref, dimensions];
};
