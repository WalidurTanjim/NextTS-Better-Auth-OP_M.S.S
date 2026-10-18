import React from 'react';
import {Button} from "@heroui/react";

interface GoogleButtonProps {
    logType: string;
    onClick: () => void;
}

const GoogleButton = ({ logType, onClick }: GoogleButtonProps) => {
    return (
        <Button onClick={onClick}>{logType} via Google</Button>
    );
};

export default GoogleButton;