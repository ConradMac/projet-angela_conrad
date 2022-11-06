<?php

namespace App\Controller\Admin;

use App\Entity\Documents;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class DocumentsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Documents::class;
    }

    
    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('users')->setlabel('users'),
            DateField::new('sending_date')->setlabel('sending_date'),
            TextField::new('description')->setlabel('description'),
            // fielfield easy admin.
        ];
    }
    
}
