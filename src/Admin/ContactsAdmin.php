<?php

namespace App\Admin;

use Sonata\AdminBundle\Form\FormMapper;
// use Sonata\AdminBundle\Show\ShowMapper;


// use Sonata\AdminBundle\Datagrid\ListMapper;
// use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Show\ShowMapper;
use Sonata\AdminBundle\Admin\AbstractAdmin;
use Sonata\AdminBundle\Datagrid\ListMapper;
use Sonata\AdminBundle\Datagrid\DatagridMapper;
use Sonata\AdminBundle\Form\Type\Filter\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Sonata\AdminBundle\Admin\AdminInterface;


final class ContactsAdmin extends AbstractAdmin
{
    protected function configureFormFields(FormMapper $form): void
    {
        $form->add('name', TextType::class);
        $form->add('lastname', TextType::class);
        $form->add('email', EmailType::class);
        $form->add('phone', TelType::class);
        $form->add('address', TextType::class);
        $form->add('zipcode', ZipcodeType::class);
        $form->add('city', TextType::class);
        $form->add('country', TextType::class);
        $form->add('information', TextareaType::class);
        // $form->add('tokien', TextType::class);')
        // $form->add('created_at', DateType::class);
        // $form->add('updated_at', DateType::class);
        // $form->add('modified_by', TextType::class);
        // $form->add('is_active', ChoiceType::class, [
        //     'choices' => [
        //         'En cours' => true,
        //         'Fin du contrat' => false,
        //     ],
        // ]);  
    }

    // protected function configureDatagridFilters(DatagridMapper $filter): void
    // {
    //     $filter->add('name');
    //     $filter->add('lastname');
    //     $filter->add('email');
    //     $filter->add('phone');
    //     $filter->add('address');
    //     $filter->add('zipcode');
    //     $filter->add('city');
    //     $filter->add('country');
    //     $filter->add('information');
    // }

    protected function configureDatagridFilters(DatagridMapper $datagrid): void
    {
        $datagrid->add('name');
        $datagrid->add('lastname');
        $datagrid->add('email');
        $datagrid->add('phone');
        $datagrid->add('address');
        $datagrid->add('zipcode');
        $datagrid->add('city');
        $datagrid->add('country');
        $datagrid->add('information');
    }

    protected function configureListFields(ListMapper $list): void
    {
        $list->addIdentifier('name');
        $list->addIdentifier('lastname');
        $list->addIdentifier('email');
        $list->addIdentifier('phone');
        $list->addIdentifier('address');
        $list->addIdentifier('zipcode');
        $list->addIdentifier('city');
        $list->addIdentifier('country');
        $list->addIdentifier('information'); 
    }

    protected function configureShowFields(ShowMapper $show): void
    {
        $show->add('name');
        $show->add('lastname');
        $show->add('email');
        $show->add('phone');
        $show->add('address');
        $show->add('zipcode');
        $show->add('city');
        $show->add('country');
        $show->add('information');
    }
}