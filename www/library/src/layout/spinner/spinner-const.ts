import type {PositionType} from './spinner-type';

export const defaultData = {
    size: 48,
};

export const positionValueMap: {[key in PositionType]: PositionType} = {
    'static': 'static',
    absolute: 'absolute',
    fixed: 'fixed',
    relative: 'relative',
};
