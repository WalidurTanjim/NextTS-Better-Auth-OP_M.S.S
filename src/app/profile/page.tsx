"use client";

import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField } from "@heroui/react";
import {authClient} from "@/lib/auth-client";

const ProfilePage = () => {
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const { data: resData, error } = await authClient.updateUser({
            name: data?.name
        })
        if(resData?.status) {
            alert("User updated successfully")
        }
    };

    return (
        <Form className="w-full max-w-96" onSubmit={onSubmit}>
            <Fieldset>
                <Fieldset.Legend>Profile Settings</Fieldset.Legend>
                <Description>Update your profile information.</Description>
                <FieldGroup>
                    <TextField isRequired name="name" validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>
                </FieldGroup>

                <Fieldset.Actions>
                    <Button type="submit">Save changes</Button>
                    <Button type="reset" variant="secondary">Cancel</Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
    );
};

export default ProfilePage;