import styled from 'styled-components'
import { Select as SelectBase, Box }from '@material-ui/core';
import { rem } from 'polished'

export const Wrapper = styled(Box)`
    text-align: right;
`

export const Select = styled(SelectBase)`
    text-align: left;
    width: ${rem(200)};
`