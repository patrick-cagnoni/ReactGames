import styled from 'styled-components'
import { rem } from 'polished'

import DrawerBase from '@material-ui/core/Drawer'

export const Drawer = styled(DrawerBase)`
    .MuiDrawer-paperAnchorRight {
        width: ${rem(310)};
    }
`
