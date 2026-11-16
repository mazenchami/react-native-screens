'use client';

import type {
  HostComponent,
  ViewProps,
  CodegenTypes as CT,
} from 'react-native';
import { codegenNativeComponent } from 'react-native';

type StackHostColorScheme = 'inherit' | 'light' | 'dark';
type StackHostLayoutDirection = 'inherit' | 'ltr' | 'rtl';

export interface NativeProps extends ViewProps {
  // General
  colorScheme?: CT.WithDefault<StackHostColorScheme, 'inherit'>;
  // Not `direction`: that name is RN's style prop.
  layoutDirection?: CT.WithDefault<StackHostLayoutDirection, 'inherit'>;
}

export default codegenNativeComponent<NativeProps>('RNSStackHost', {
  interfaceOnly: true,
}) as HostComponent<NativeProps>;
