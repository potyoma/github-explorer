import * as Tooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'

import s from './truncated-text.module.css'

export default function TruncatedText({ truncate = 15, content }) {
    if (!content) return null

    const displayContent = content.slice(0, truncate)
    const isTrimmed = displayContent.length < content.length

    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <div className={s.truncate}>
                        {displayContent}
                        {clsx(isTrimmed && '...')}
                    </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                    <Tooltip.Content className={s.tooltip} sideOffset={5}>
                        {content}
                        <Tooltip.Arrow className={s.arrow} />
                    </Tooltip.Content>
                </Tooltip.Portal>
            </Tooltip.Root>
        </Tooltip.Provider>
    )
}
