import React from 'react';
import {Button} from "@heroui/react";

interface GithubButtonProps {
    logType: string;
    onClick?: () => void;
}

const GithubButton = ({ logType, onClick }: GithubButtonProps) => {
    return <Button onClick={onClick}>{logType} via Github</Button>
};

export default GithubButton;