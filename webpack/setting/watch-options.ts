import {Configuration} from 'webpack';

export const watchOptions: Configuration['watchOptions'] = {
    ignored: /node_modules/,
};
