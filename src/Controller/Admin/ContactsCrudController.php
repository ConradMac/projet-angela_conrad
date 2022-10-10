<?php

namespace App\Controller\Admin;

use App\Entity\Contacts;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class ContactsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Contacts::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name')->setlabel('Prénom'),
            EmailField::new('email')->setlabel('Email'),
            TextField::new('subject')->setlabel('Sujet'),
            TextField::new('message')->setlabel('Message'),
            TextField::new('lastname')->setlabel('Nom'),
            IntegerField::new('phone')->setlabel('Téléphone'),

        ];
    }
    
}
