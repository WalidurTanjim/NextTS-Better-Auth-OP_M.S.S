import React from 'react';
import {Button} from "@heroui/react";

interface DiscordButtonProps {
    logType: string;
    onClick: () => void;
}

const DiscordButton = ({ logType, onClick }: DiscordButtonProps) => {
    return <Button onClick={onClick}>{logType} via Discord</Button>
};

export default DiscordButton;