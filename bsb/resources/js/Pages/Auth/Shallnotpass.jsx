import React from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';

export default function VerifyEmail({ status }) {

    return (
        <Guest>
            <Head title="You Shall Not Pass" />
            <div className="mb-4 text-sm text-gray-600 text-center">
                Aqui não migão, area reservada aos CASAS.
                <img src='../../assets/shallNotPass.gif'></img>

            </div>
        </Guest>
    );
}
